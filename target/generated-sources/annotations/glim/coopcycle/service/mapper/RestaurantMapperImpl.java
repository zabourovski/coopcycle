package glim.coopcycle.service.mapper;

import glim.coopcycle.domain.Restaurant;
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
public class RestaurantMapperImpl implements RestaurantMapper {

    @Override
    public Restaurant toEntity(RestaurantDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Restaurant restaurant = new Restaurant();

        restaurant.setId( dto.getId() );
        restaurant.setIdRest( dto.getIdRest() );
        restaurant.setNomRest( dto.getNomRest() );
        restaurant.setAdresseRest( dto.getAdresseRest() );

        return restaurant;
    }

    @Override
    public RestaurantDTO toDto(Restaurant entity) {
        if ( entity == null ) {
            return null;
        }

        RestaurantDTO restaurantDTO = new RestaurantDTO();

        restaurantDTO.setId( entity.getId() );
        restaurantDTO.setIdRest( entity.getIdRest() );
        restaurantDTO.setNomRest( entity.getNomRest() );
        restaurantDTO.setAdresseRest( entity.getAdresseRest() );

        return restaurantDTO;
    }

    @Override
    public List<Restaurant> toEntity(List<RestaurantDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Restaurant> list = new ArrayList<Restaurant>( dtoList.size() );
        for ( RestaurantDTO restaurantDTO : dtoList ) {
            list.add( toEntity( restaurantDTO ) );
        }

        return list;
    }

    @Override
    public List<RestaurantDTO> toDto(List<Restaurant> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<RestaurantDTO> list = new ArrayList<RestaurantDTO>( entityList.size() );
        for ( Restaurant restaurant : entityList ) {
            list.add( toDto( restaurant ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Restaurant entity, RestaurantDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getIdRest() != null ) {
            entity.setIdRest( dto.getIdRest() );
        }
        if ( dto.getNomRest() != null ) {
            entity.setNomRest( dto.getNomRest() );
        }
        if ( dto.getAdresseRest() != null ) {
            entity.setAdresseRest( dto.getAdresseRest() );
        }
    }
}
