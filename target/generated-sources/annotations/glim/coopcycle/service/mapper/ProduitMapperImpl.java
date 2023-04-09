package glim.coopcycle.service.mapper;

import glim.coopcycle.domain.Association;
import glim.coopcycle.domain.Client;
import glim.coopcycle.domain.Livraison;
import glim.coopcycle.domain.Livreur;
import glim.coopcycle.domain.Produit;
import glim.coopcycle.domain.Restaurant;
import glim.coopcycle.service.dto.AssociationDTO;
import glim.coopcycle.service.dto.ClientDTO;
import glim.coopcycle.service.dto.LivraisonDTO;
import glim.coopcycle.service.dto.LivreurDTO;
import glim.coopcycle.service.dto.ProduitDTO;
import glim.coopcycle.service.dto.RestaurantDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-09T22:35:25+0200",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.18 (Ubuntu)"
)
@Component
public class ProduitMapperImpl implements ProduitMapper {

    @Override
    public Produit toEntity(ProduitDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Produit produit = new Produit();

        produit.setId( dto.getId() );
        produit.setIdProd( dto.getIdProd() );
        produit.setNomProd( dto.getNomProd() );
        produit.setPrixProd( dto.getPrixProd() );
        produit.livraison( livraisonDTOToLivraison( dto.getLivraison() ) );
        produit.client( clientDTOToClient( dto.getClient() ) );
        produit.restaurant( restaurantDTOToRestaurant( dto.getRestaurant() ) );

        return produit;
    }

    @Override
    public List<Produit> toEntity(List<ProduitDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Produit> list = new ArrayList<Produit>( dtoList.size() );
        for ( ProduitDTO produitDTO : dtoList ) {
            list.add( toEntity( produitDTO ) );
        }

        return list;
    }

    @Override
    public List<ProduitDTO> toDto(List<Produit> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<ProduitDTO> list = new ArrayList<ProduitDTO>( entityList.size() );
        for ( Produit produit : entityList ) {
            list.add( toDto( produit ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Produit entity, ProduitDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getIdProd() != null ) {
            entity.setIdProd( dto.getIdProd() );
        }
        if ( dto.getNomProd() != null ) {
            entity.setNomProd( dto.getNomProd() );
        }
        if ( dto.getPrixProd() != null ) {
            entity.setPrixProd( dto.getPrixProd() );
        }
        if ( dto.getLivraison() != null ) {
            if ( entity.getLivraison() == null ) {
                entity.livraison( new Livraison() );
            }
            livraisonDTOToLivraison1( dto.getLivraison(), entity.getLivraison() );
        }
        if ( dto.getClient() != null ) {
            if ( entity.getClient() == null ) {
                entity.client( new Client() );
            }
            clientDTOToClient1( dto.getClient(), entity.getClient() );
        }
        if ( dto.getRestaurant() != null ) {
            if ( entity.getRestaurant() == null ) {
                entity.restaurant( new Restaurant() );
            }
            restaurantDTOToRestaurant1( dto.getRestaurant(), entity.getRestaurant() );
        }
    }

    @Override
    public ProduitDTO toDto(Produit s) {
        if ( s == null ) {
            return null;
        }

        ProduitDTO produitDTO = new ProduitDTO();

        produitDTO.setLivraison( toDtoLivraisonId( s.getLivraison() ) );
        produitDTO.setClient( toDtoClientId( s.getClient() ) );
        produitDTO.setRestaurant( toDtoRestaurantId( s.getRestaurant() ) );
        produitDTO.setId( s.getId() );
        produitDTO.setIdProd( s.getIdProd() );
        produitDTO.setNomProd( s.getNomProd() );
        produitDTO.setPrixProd( s.getPrixProd() );

        return produitDTO;
    }

    @Override
    public LivraisonDTO toDtoLivraisonId(Livraison livraison) {
        if ( livraison == null ) {
            return null;
        }

        LivraisonDTO livraisonDTO = new LivraisonDTO();

        livraisonDTO.setId( livraison.getId() );

        return livraisonDTO;
    }

    @Override
    public ClientDTO toDtoClientId(Client client) {
        if ( client == null ) {
            return null;
        }

        ClientDTO clientDTO = new ClientDTO();

        clientDTO.setId( client.getId() );

        return clientDTO;
    }

    @Override
    public RestaurantDTO toDtoRestaurantId(Restaurant restaurant) {
        if ( restaurant == null ) {
            return null;
        }

        RestaurantDTO restaurantDTO = new RestaurantDTO();

        restaurantDTO.setId( restaurant.getId() );

        return restaurantDTO;
    }

    protected Client clientDTOToClient(ClientDTO clientDTO) {
        if ( clientDTO == null ) {
            return null;
        }

        Client client = new Client();

        client.setId( clientDTO.getId() );
        client.setIdClient( clientDTO.getIdClient() );
        client.setPrenomClient( clientDTO.getPrenomClient() );
        client.setNomClient( clientDTO.getNomClient() );
        client.setAdresseClient( clientDTO.getAdresseClient() );
        client.setEmail( clientDTO.getEmail() );
        client.setTelCLient( clientDTO.getTelCLient() );

        return client;
    }

    protected Association associationDTOToAssociation(AssociationDTO associationDTO) {
        if ( associationDTO == null ) {
            return null;
        }

        Association association = new Association();

        association.setId( associationDTO.getId() );
        association.setIdAsso( associationDTO.getIdAsso() );
        association.setNomAsso( associationDTO.getNomAsso() );

        return association;
    }

    protected Livreur livreurDTOToLivreur(LivreurDTO livreurDTO) {
        if ( livreurDTO == null ) {
            return null;
        }

        Livreur livreur = new Livreur();

        livreur.setId( livreurDTO.getId() );
        livreur.setIdLivreur( livreurDTO.getIdLivreur() );
        livreur.setNomLivreur( livreurDTO.getNomLivreur() );
        livreur.setPrenomLivreur( livreurDTO.getPrenomLivreur() );
        livreur.setTelLivreur( livreurDTO.getTelLivreur() );
        livreur.association( associationDTOToAssociation( livreurDTO.getAssociation() ) );

        return livreur;
    }

    protected Livraison livraisonDTOToLivraison(LivraisonDTO livraisonDTO) {
        if ( livraisonDTO == null ) {
            return null;
        }

        Livraison livraison = new Livraison();

        livraison.setId( livraisonDTO.getId() );
        livraison.setIdLivraison( livraisonDTO.getIdLivraison() );
        livraison.setPrixLivraison( livraisonDTO.getPrixLivraison() );
        livraison.setDuree( livraisonDTO.getDuree() );
        livraison.setAdresseLivraison( livraisonDTO.getAdresseLivraison() );
        livraison.client( clientDTOToClient( livraisonDTO.getClient() ) );
        livraison.livreur( livreurDTOToLivreur( livraisonDTO.getLivreur() ) );

        return livraison;
    }

    protected Restaurant restaurantDTOToRestaurant(RestaurantDTO restaurantDTO) {
        if ( restaurantDTO == null ) {
            return null;
        }

        Restaurant restaurant = new Restaurant();

        restaurant.setId( restaurantDTO.getId() );
        restaurant.setIdRest( restaurantDTO.getIdRest() );
        restaurant.setNomRest( restaurantDTO.getNomRest() );
        restaurant.setAdresseRest( restaurantDTO.getAdresseRest() );

        return restaurant;
    }

    protected void clientDTOToClient1(ClientDTO clientDTO, Client mappingTarget) {
        if ( clientDTO == null ) {
            return;
        }

        if ( clientDTO.getId() != null ) {
            mappingTarget.setId( clientDTO.getId() );
        }
        if ( clientDTO.getIdClient() != null ) {
            mappingTarget.setIdClient( clientDTO.getIdClient() );
        }
        if ( clientDTO.getPrenomClient() != null ) {
            mappingTarget.setPrenomClient( clientDTO.getPrenomClient() );
        }
        if ( clientDTO.getNomClient() != null ) {
            mappingTarget.setNomClient( clientDTO.getNomClient() );
        }
        if ( clientDTO.getAdresseClient() != null ) {
            mappingTarget.setAdresseClient( clientDTO.getAdresseClient() );
        }
        if ( clientDTO.getEmail() != null ) {
            mappingTarget.setEmail( clientDTO.getEmail() );
        }
        if ( clientDTO.getTelCLient() != null ) {
            mappingTarget.setTelCLient( clientDTO.getTelCLient() );
        }
    }

    protected void associationDTOToAssociation1(AssociationDTO associationDTO, Association mappingTarget) {
        if ( associationDTO == null ) {
            return;
        }

        if ( associationDTO.getId() != null ) {
            mappingTarget.setId( associationDTO.getId() );
        }
        if ( associationDTO.getIdAsso() != null ) {
            mappingTarget.setIdAsso( associationDTO.getIdAsso() );
        }
        if ( associationDTO.getNomAsso() != null ) {
            mappingTarget.setNomAsso( associationDTO.getNomAsso() );
        }
    }

    protected void livreurDTOToLivreur1(LivreurDTO livreurDTO, Livreur mappingTarget) {
        if ( livreurDTO == null ) {
            return;
        }

        if ( livreurDTO.getId() != null ) {
            mappingTarget.setId( livreurDTO.getId() );
        }
        if ( livreurDTO.getIdLivreur() != null ) {
            mappingTarget.setIdLivreur( livreurDTO.getIdLivreur() );
        }
        if ( livreurDTO.getNomLivreur() != null ) {
            mappingTarget.setNomLivreur( livreurDTO.getNomLivreur() );
        }
        if ( livreurDTO.getPrenomLivreur() != null ) {
            mappingTarget.setPrenomLivreur( livreurDTO.getPrenomLivreur() );
        }
        if ( livreurDTO.getTelLivreur() != null ) {
            mappingTarget.setTelLivreur( livreurDTO.getTelLivreur() );
        }
        if ( livreurDTO.getAssociation() != null ) {
            if ( mappingTarget.getAssociation() == null ) {
                mappingTarget.association( new Association() );
            }
            associationDTOToAssociation1( livreurDTO.getAssociation(), mappingTarget.getAssociation() );
        }
    }

    protected void livraisonDTOToLivraison1(LivraisonDTO livraisonDTO, Livraison mappingTarget) {
        if ( livraisonDTO == null ) {
            return;
        }

        if ( livraisonDTO.getId() != null ) {
            mappingTarget.setId( livraisonDTO.getId() );
        }
        if ( livraisonDTO.getIdLivraison() != null ) {
            mappingTarget.setIdLivraison( livraisonDTO.getIdLivraison() );
        }
        if ( livraisonDTO.getPrixLivraison() != null ) {
            mappingTarget.setPrixLivraison( livraisonDTO.getPrixLivraison() );
        }
        if ( livraisonDTO.getDuree() != null ) {
            mappingTarget.setDuree( livraisonDTO.getDuree() );
        }
        if ( livraisonDTO.getAdresseLivraison() != null ) {
            mappingTarget.setAdresseLivraison( livraisonDTO.getAdresseLivraison() );
        }
        if ( livraisonDTO.getClient() != null ) {
            if ( mappingTarget.getClient() == null ) {
                mappingTarget.client( new Client() );
            }
            clientDTOToClient1( livraisonDTO.getClient(), mappingTarget.getClient() );
        }
        if ( livraisonDTO.getLivreur() != null ) {
            if ( mappingTarget.getLivreur() == null ) {
                mappingTarget.livreur( new Livreur() );
            }
            livreurDTOToLivreur1( livraisonDTO.getLivreur(), mappingTarget.getLivreur() );
        }
    }

    protected void restaurantDTOToRestaurant1(RestaurantDTO restaurantDTO, Restaurant mappingTarget) {
        if ( restaurantDTO == null ) {
            return;
        }

        if ( restaurantDTO.getId() != null ) {
            mappingTarget.setId( restaurantDTO.getId() );
        }
        if ( restaurantDTO.getIdRest() != null ) {
            mappingTarget.setIdRest( restaurantDTO.getIdRest() );
        }
        if ( restaurantDTO.getNomRest() != null ) {
            mappingTarget.setNomRest( restaurantDTO.getNomRest() );
        }
        if ( restaurantDTO.getAdresseRest() != null ) {
            mappingTarget.setAdresseRest( restaurantDTO.getAdresseRest() );
        }
    }
}
