package glim.coopcycle.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import glim.coopcycle.IntegrationTest;
import glim.coopcycle.domain.Produit;
import glim.coopcycle.repository.EntityManager;
import glim.coopcycle.repository.ProduitRepository;
import glim.coopcycle.service.dto.ProduitDTO;
import glim.coopcycle.service.mapper.ProduitMapper;
import java.time.Duration;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.reactive.server.WebTestClient;

/**
 * Integration tests for the {@link ProduitResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient(timeout = IntegrationTest.DEFAULT_ENTITY_TIMEOUT)
@WithMockUser
class ProduitResourceIT {

    private static final Integer DEFAULT_ID_PROD = 1;
    private static final Integer UPDATED_ID_PROD = 2;

    private static final String DEFAULT_NOM_PROD = "AAAAAAAAAA";
    private static final String UPDATED_NOM_PROD = "BBBBBBBBBB";

    private static final Float DEFAULT_PRIX_PROD = 0F;
    private static final Float UPDATED_PRIX_PROD = 1F;

    private static final String ENTITY_API_URL = "/api/produits";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ProduitRepository produitRepository;

    @Autowired
    private ProduitMapper produitMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private WebTestClient webTestClient;

    private Produit produit;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Produit createEntity(EntityManager em) {
        Produit produit = new Produit().idProd(DEFAULT_ID_PROD).nomProd(DEFAULT_NOM_PROD).prixProd(DEFAULT_PRIX_PROD);
        return produit;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Produit createUpdatedEntity(EntityManager em) {
        Produit produit = new Produit().idProd(UPDATED_ID_PROD).nomProd(UPDATED_NOM_PROD).prixProd(UPDATED_PRIX_PROD);
        return produit;
    }

    public static void deleteEntities(EntityManager em) {
        try {
            em.deleteAll(Produit.class).block();
        } catch (Exception e) {
            // It can fail, if other entities are still referring this - it will be removed later.
        }
    }

    @AfterEach
    public void cleanup() {
        deleteEntities(em);
    }

    @BeforeEach
    public void initTest() {
        deleteEntities(em);
        produit = createEntity(em);
    }

    @Test
    void createProduit() throws Exception {
        int databaseSizeBeforeCreate = produitRepository.findAll().collectList().block().size();
        // Create the Produit
        ProduitDTO produitDTO = produitMapper.toDto(produit);
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeCreate + 1);
        Produit testProduit = produitList.get(produitList.size() - 1);
        assertThat(testProduit.getIdProd()).isEqualTo(DEFAULT_ID_PROD);
        assertThat(testProduit.getNomProd()).isEqualTo(DEFAULT_NOM_PROD);
        assertThat(testProduit.getPrixProd()).isEqualTo(DEFAULT_PRIX_PROD);
    }

    @Test
    void createProduitWithExistingId() throws Exception {
        // Create the Produit with an existing ID
        produit.setId(1L);
        ProduitDTO produitDTO = produitMapper.toDto(produit);

        int databaseSizeBeforeCreate = produitRepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void checkIdProdIsRequired() throws Exception {
        int databaseSizeBeforeTest = produitRepository.findAll().collectList().block().size();
        // set the field null
        produit.setIdProd(null);

        // Create the Produit, which fails.
        ProduitDTO produitDTO = produitMapper.toDto(produit);

        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    void checkNomProdIsRequired() throws Exception {
        int databaseSizeBeforeTest = produitRepository.findAll().collectList().block().size();
        // set the field null
        produit.setNomProd(null);

        // Create the Produit, which fails.
        ProduitDTO produitDTO = produitMapper.toDto(produit);

        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    void checkPrixProdIsRequired() throws Exception {
        int databaseSizeBeforeTest = produitRepository.findAll().collectList().block().size();
        // set the field null
        produit.setPrixProd(null);

        // Create the Produit, which fails.
        ProduitDTO produitDTO = produitMapper.toDto(produit);

        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    void getAllProduitsAsStream() {
        // Initialize the database
        produitRepository.save(produit).block();

        List<Produit> produitList = webTestClient
            .get()
            .uri(ENTITY_API_URL)
            .accept(MediaType.APPLICATION_NDJSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentTypeCompatibleWith(MediaType.APPLICATION_NDJSON)
            .returnResult(ProduitDTO.class)
            .getResponseBody()
            .map(produitMapper::toEntity)
            .filter(produit::equals)
            .collectList()
            .block(Duration.ofSeconds(5));

        assertThat(produitList).isNotNull();
        assertThat(produitList).hasSize(1);
        Produit testProduit = produitList.get(0);
        assertThat(testProduit.getIdProd()).isEqualTo(DEFAULT_ID_PROD);
        assertThat(testProduit.getNomProd()).isEqualTo(DEFAULT_NOM_PROD);
        assertThat(testProduit.getPrixProd()).isEqualTo(DEFAULT_PRIX_PROD);
    }

    @Test
    void getAllProduits() {
        // Initialize the database
        produitRepository.save(produit).block();

        // Get all the produitList
        webTestClient
            .get()
            .uri(ENTITY_API_URL + "?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(produit.getId().intValue()))
            .jsonPath("$.[*].idProd")
            .value(hasItem(DEFAULT_ID_PROD))
            .jsonPath("$.[*].nomProd")
            .value(hasItem(DEFAULT_NOM_PROD))
            .jsonPath("$.[*].prixProd")
            .value(hasItem(DEFAULT_PRIX_PROD.doubleValue()));
    }

    @Test
    void getProduit() {
        // Initialize the database
        produitRepository.save(produit).block();

        // Get the produit
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, produit.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(produit.getId().intValue()))
            .jsonPath("$.idProd")
            .value(is(DEFAULT_ID_PROD))
            .jsonPath("$.nomProd")
            .value(is(DEFAULT_NOM_PROD))
            .jsonPath("$.prixProd")
            .value(is(DEFAULT_PRIX_PROD.doubleValue()));
    }

    @Test
    void getNonExistingProduit() {
        // Get the produit
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void putExistingProduit() throws Exception {
        // Initialize the database
        produitRepository.save(produit).block();

        int databaseSizeBeforeUpdate = produitRepository.findAll().collectList().block().size();

        // Update the produit
        Produit updatedProduit = produitRepository.findById(produit.getId()).block();
        updatedProduit.idProd(UPDATED_ID_PROD).nomProd(UPDATED_NOM_PROD).prixProd(UPDATED_PRIX_PROD);
        ProduitDTO produitDTO = produitMapper.toDto(updatedProduit);

        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, produitDTO.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeUpdate);
        Produit testProduit = produitList.get(produitList.size() - 1);
        assertThat(testProduit.getIdProd()).isEqualTo(UPDATED_ID_PROD);
        assertThat(testProduit.getNomProd()).isEqualTo(UPDATED_NOM_PROD);
        assertThat(testProduit.getPrixProd()).isEqualTo(UPDATED_PRIX_PROD);
    }

    @Test
    void putNonExistingProduit() throws Exception {
        int databaseSizeBeforeUpdate = produitRepository.findAll().collectList().block().size();
        produit.setId(count.incrementAndGet());

        // Create the Produit
        ProduitDTO produitDTO = produitMapper.toDto(produit);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, produitDTO.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchProduit() throws Exception {
        int databaseSizeBeforeUpdate = produitRepository.findAll().collectList().block().size();
        produit.setId(count.incrementAndGet());

        // Create the Produit
        ProduitDTO produitDTO = produitMapper.toDto(produit);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamProduit() throws Exception {
        int databaseSizeBeforeUpdate = produitRepository.findAll().collectList().block().size();
        produit.setId(count.incrementAndGet());

        // Create the Produit
        ProduitDTO produitDTO = produitMapper.toDto(produit);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateProduitWithPatch() throws Exception {
        // Initialize the database
        produitRepository.save(produit).block();

        int databaseSizeBeforeUpdate = produitRepository.findAll().collectList().block().size();

        // Update the produit using partial update
        Produit partialUpdatedProduit = new Produit();
        partialUpdatedProduit.setId(produit.getId());

        partialUpdatedProduit.prixProd(UPDATED_PRIX_PROD);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedProduit.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedProduit))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeUpdate);
        Produit testProduit = produitList.get(produitList.size() - 1);
        assertThat(testProduit.getIdProd()).isEqualTo(DEFAULT_ID_PROD);
        assertThat(testProduit.getNomProd()).isEqualTo(DEFAULT_NOM_PROD);
        assertThat(testProduit.getPrixProd()).isEqualTo(UPDATED_PRIX_PROD);
    }

    @Test
    void fullUpdateProduitWithPatch() throws Exception {
        // Initialize the database
        produitRepository.save(produit).block();

        int databaseSizeBeforeUpdate = produitRepository.findAll().collectList().block().size();

        // Update the produit using partial update
        Produit partialUpdatedProduit = new Produit();
        partialUpdatedProduit.setId(produit.getId());

        partialUpdatedProduit.idProd(UPDATED_ID_PROD).nomProd(UPDATED_NOM_PROD).prixProd(UPDATED_PRIX_PROD);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedProduit.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedProduit))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeUpdate);
        Produit testProduit = produitList.get(produitList.size() - 1);
        assertThat(testProduit.getIdProd()).isEqualTo(UPDATED_ID_PROD);
        assertThat(testProduit.getNomProd()).isEqualTo(UPDATED_NOM_PROD);
        assertThat(testProduit.getPrixProd()).isEqualTo(UPDATED_PRIX_PROD);
    }

    @Test
    void patchNonExistingProduit() throws Exception {
        int databaseSizeBeforeUpdate = produitRepository.findAll().collectList().block().size();
        produit.setId(count.incrementAndGet());

        // Create the Produit
        ProduitDTO produitDTO = produitMapper.toDto(produit);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, produitDTO.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchProduit() throws Exception {
        int databaseSizeBeforeUpdate = produitRepository.findAll().collectList().block().size();
        produit.setId(count.incrementAndGet());

        // Create the Produit
        ProduitDTO produitDTO = produitMapper.toDto(produit);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamProduit() throws Exception {
        int databaseSizeBeforeUpdate = produitRepository.findAll().collectList().block().size();
        produit.setId(count.incrementAndGet());

        // Create the Produit
        ProduitDTO produitDTO = produitMapper.toDto(produit);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(produitDTO))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the Produit in the database
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteProduit() {
        // Initialize the database
        produitRepository.save(produit).block();

        int databaseSizeBeforeDelete = produitRepository.findAll().collectList().block().size();

        // Delete the produit
        webTestClient
            .delete()
            .uri(ENTITY_API_URL_ID, produit.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        List<Produit> produitList = produitRepository.findAll().collectList().block();
        assertThat(produitList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
