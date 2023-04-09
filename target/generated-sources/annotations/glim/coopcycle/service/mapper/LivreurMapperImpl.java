package glim.coopcycle.service.mapper;

import glim.coopcycle.domain.Association;
import glim.coopcycle.domain.Livreur;
import glim.coopcycle.service.dto.AssociationDTO;
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
public class LivreurMapperImpl implements LivreurMapper {

    @Override
    public Livreur toEntity(LivreurDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Livreur livreur = new Livreur();

        livreur.setId( dto.getId() );
        livreur.setIdLivreur( dto.getIdLivreur() );
        livreur.setNomLivreur( dto.getNomLivreur() );
        livreur.setPrenomLivreur( dto.getPrenomLivreur() );
        livreur.setTelLivreur( dto.getTelLivreur() );
        livreur.association( associationDTOToAssociation( dto.getAssociation() ) );

        return livreur;
    }

    @Override
    public List<Livreur> toEntity(List<LivreurDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Livreur> list = new ArrayList<Livreur>( dtoList.size() );
        for ( LivreurDTO livreurDTO : dtoList ) {
            list.add( toEntity( livreurDTO ) );
        }

        return list;
    }

    @Override
    public List<LivreurDTO> toDto(List<Livreur> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<LivreurDTO> list = new ArrayList<LivreurDTO>( entityList.size() );
        for ( Livreur livreur : entityList ) {
            list.add( toDto( livreur ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Livreur entity, LivreurDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getIdLivreur() != null ) {
            entity.setIdLivreur( dto.getIdLivreur() );
        }
        if ( dto.getNomLivreur() != null ) {
            entity.setNomLivreur( dto.getNomLivreur() );
        }
        if ( dto.getPrenomLivreur() != null ) {
            entity.setPrenomLivreur( dto.getPrenomLivreur() );
        }
        if ( dto.getTelLivreur() != null ) {
            entity.setTelLivreur( dto.getTelLivreur() );
        }
        if ( dto.getAssociation() != null ) {
            if ( entity.getAssociation() == null ) {
                entity.association( new Association() );
            }
            associationDTOToAssociation1( dto.getAssociation(), entity.getAssociation() );
        }
    }

    @Override
    public LivreurDTO toDto(Livreur s) {
        if ( s == null ) {
            return null;
        }

        LivreurDTO livreurDTO = new LivreurDTO();

        livreurDTO.setAssociation( toDtoAssociationId( s.getAssociation() ) );
        livreurDTO.setId( s.getId() );
        livreurDTO.setIdLivreur( s.getIdLivreur() );
        livreurDTO.setNomLivreur( s.getNomLivreur() );
        livreurDTO.setPrenomLivreur( s.getPrenomLivreur() );
        livreurDTO.setTelLivreur( s.getTelLivreur() );

        return livreurDTO;
    }

    @Override
    public AssociationDTO toDtoAssociationId(Association association) {
        if ( association == null ) {
            return null;
        }

        AssociationDTO associationDTO = new AssociationDTO();

        associationDTO.setId( association.getId() );

        return associationDTO;
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
}
