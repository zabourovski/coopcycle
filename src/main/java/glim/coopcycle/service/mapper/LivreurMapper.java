package glim.coopcycle.service.mapper;

import glim.coopcycle.domain.Association;
import glim.coopcycle.domain.Livreur;
import glim.coopcycle.service.dto.AssociationDTO;
import glim.coopcycle.service.dto.LivreurDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Livreur} and its DTO {@link LivreurDTO}.
 */
@Mapper(componentModel = "spring")
public interface LivreurMapper extends EntityMapper<LivreurDTO, Livreur> {
    @Mapping(target = "association", source = "association", qualifiedByName = "associationId")
    LivreurDTO toDto(Livreur s);

    @Named("associationId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    AssociationDTO toDtoAssociationId(Association association);
}
