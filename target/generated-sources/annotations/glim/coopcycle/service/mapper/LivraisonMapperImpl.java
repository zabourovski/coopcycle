package glim.coopcycle.service.mapper;

import glim.coopcycle.domain.Association;
import glim.coopcycle.domain.Client;
import glim.coopcycle.domain.Livraison;
import glim.coopcycle.domain.Livreur;
import glim.coopcycle.service.dto.AssociationDTO;
import glim.coopcycle.service.dto.ClientDTO;
import glim.coopcycle.service.dto.LivraisonDTO;
import glim.coopcycle.service.dto.LivreurDTO;
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
public class LivraisonMapperImpl implements LivraisonMapper {

    @Override
    public Livraison toEntity(LivraisonDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Livraison livraison = new Livraison();

        livraison.setId( dto.getId() );
        livraison.setIdLivraison( dto.getIdLivraison() );
        livraison.setPrixLivraison( dto.getPrixLivraison() );
        livraison.setDuree( dto.getDuree() );
        livraison.setAdresseLivraison( dto.getAdresseLivraison() );
        livraison.client( clientDTOToClient( dto.getClient() ) );
        livraison.livreur( livreurDTOToLivreur( dto.getLivreur() ) );

        return livraison;
    }

    @Override
    public List<Livraison> toEntity(List<LivraisonDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Livraison> list = new ArrayList<Livraison>( dtoList.size() );
        for ( LivraisonDTO livraisonDTO : dtoList ) {
            list.add( toEntity( livraisonDTO ) );
        }

        return list;
    }

    @Override
    public List<LivraisonDTO> toDto(List<Livraison> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<LivraisonDTO> list = new ArrayList<LivraisonDTO>( entityList.size() );
        for ( Livraison livraison : entityList ) {
            list.add( toDto( livraison ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Livraison entity, LivraisonDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getIdLivraison() != null ) {
            entity.setIdLivraison( dto.getIdLivraison() );
        }
        if ( dto.getPrixLivraison() != null ) {
            entity.setPrixLivraison( dto.getPrixLivraison() );
        }
        if ( dto.getDuree() != null ) {
            entity.setDuree( dto.getDuree() );
        }
        if ( dto.getAdresseLivraison() != null ) {
            entity.setAdresseLivraison( dto.getAdresseLivraison() );
        }
        if ( dto.getClient() != null ) {
            if ( entity.getClient() == null ) {
                entity.client( new Client() );
            }
            clientDTOToClient1( dto.getClient(), entity.getClient() );
        }
        if ( dto.getLivreur() != null ) {
            if ( entity.getLivreur() == null ) {
                entity.livreur( new Livreur() );
            }
            livreurDTOToLivreur1( dto.getLivreur(), entity.getLivreur() );
        }
    }

    @Override
    public LivraisonDTO toDto(Livraison s) {
        if ( s == null ) {
            return null;
        }

        LivraisonDTO livraisonDTO = new LivraisonDTO();

        livraisonDTO.setClient( toDtoClientId( s.getClient() ) );
        livraisonDTO.setLivreur( toDtoLivreurId( s.getLivreur() ) );
        livraisonDTO.setId( s.getId() );
        livraisonDTO.setIdLivraison( s.getIdLivraison() );
        livraisonDTO.setPrixLivraison( s.getPrixLivraison() );
        livraisonDTO.setDuree( s.getDuree() );
        livraisonDTO.setAdresseLivraison( s.getAdresseLivraison() );

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
    public LivreurDTO toDtoLivreurId(Livreur livreur) {
        if ( livreur == null ) {
            return null;
        }

        LivreurDTO livreurDTO = new LivreurDTO();

        livreurDTO.setId( livreur.getId() );

        return livreurDTO;
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
}
