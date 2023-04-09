package glim.coopcycle.service.mapper;

import glim.coopcycle.domain.Client;
import glim.coopcycle.domain.Livraison;
import glim.coopcycle.domain.Livreur;
import glim.coopcycle.service.dto.ClientDTO;
import glim.coopcycle.service.dto.LivraisonDTO;
import glim.coopcycle.service.dto.LivreurDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Livraison} and its DTO {@link LivraisonDTO}.
 */
@Mapper(componentModel = "spring")
public interface LivraisonMapper extends EntityMapper<LivraisonDTO, Livraison> {
    @Mapping(target = "client", source = "client", qualifiedByName = "clientId")
    @Mapping(target = "livreur", source = "livreur", qualifiedByName = "livreurId")
    LivraisonDTO toDto(Livraison s);

    @Named("clientId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ClientDTO toDtoClientId(Client client);

    @Named("livreurId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    LivreurDTO toDtoLivreurId(Livreur livreur);
}
