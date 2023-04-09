package glim.coopcycle.service.mapper;

import glim.coopcycle.domain.Association;
import glim.coopcycle.service.dto.AssociationDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Association} and its DTO {@link AssociationDTO}.
 */
@Mapper(componentModel = "spring")
public interface AssociationMapper extends EntityMapper<AssociationDTO, Association> {}
