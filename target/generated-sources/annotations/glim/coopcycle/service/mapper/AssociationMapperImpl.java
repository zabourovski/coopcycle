package glim.coopcycle.service.mapper;

import glim.coopcycle.domain.Association;
import glim.coopcycle.service.dto.AssociationDTO;
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
public class AssociationMapperImpl implements AssociationMapper {

    @Override
    public Association toEntity(AssociationDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Association association = new Association();

        association.setId( dto.getId() );
        association.setIdAsso( dto.getIdAsso() );
        association.setNomAsso( dto.getNomAsso() );

        return association;
    }

    @Override
    public AssociationDTO toDto(Association entity) {
        if ( entity == null ) {
            return null;
        }

        AssociationDTO associationDTO = new AssociationDTO();

        associationDTO.setId( entity.getId() );
        associationDTO.setIdAsso( entity.getIdAsso() );
        associationDTO.setNomAsso( entity.getNomAsso() );

        return associationDTO;
    }

    @Override
    public List<Association> toEntity(List<AssociationDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Association> list = new ArrayList<Association>( dtoList.size() );
        for ( AssociationDTO associationDTO : dtoList ) {
            list.add( toEntity( associationDTO ) );
        }

        return list;
    }

    @Override
    public List<AssociationDTO> toDto(List<Association> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<AssociationDTO> list = new ArrayList<AssociationDTO>( entityList.size() );
        for ( Association association : entityList ) {
            list.add( toDto( association ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Association entity, AssociationDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getIdAsso() != null ) {
            entity.setIdAsso( dto.getIdAsso() );
        }
        if ( dto.getNomAsso() != null ) {
            entity.setNomAsso( dto.getNomAsso() );
        }
    }
}
