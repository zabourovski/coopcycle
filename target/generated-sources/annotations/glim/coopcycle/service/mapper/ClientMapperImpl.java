package glim.coopcycle.service.mapper;

import glim.coopcycle.domain.Client;
import glim.coopcycle.service.dto.ClientDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-09T22:35:24+0200",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.18 (Ubuntu)"
)
@Component
public class ClientMapperImpl implements ClientMapper {

    @Override
    public Client toEntity(ClientDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Client client = new Client();

        client.setId( dto.getId() );
        client.setIdClient( dto.getIdClient() );
        client.setPrenomClient( dto.getPrenomClient() );
        client.setNomClient( dto.getNomClient() );
        client.setAdresseClient( dto.getAdresseClient() );
        client.setEmail( dto.getEmail() );
        client.setTelCLient( dto.getTelCLient() );

        return client;
    }

    @Override
    public ClientDTO toDto(Client entity) {
        if ( entity == null ) {
            return null;
        }

        ClientDTO clientDTO = new ClientDTO();

        clientDTO.setId( entity.getId() );
        clientDTO.setIdClient( entity.getIdClient() );
        clientDTO.setPrenomClient( entity.getPrenomClient() );
        clientDTO.setNomClient( entity.getNomClient() );
        clientDTO.setAdresseClient( entity.getAdresseClient() );
        clientDTO.setEmail( entity.getEmail() );
        clientDTO.setTelCLient( entity.getTelCLient() );

        return clientDTO;
    }

    @Override
    public List<Client> toEntity(List<ClientDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Client> list = new ArrayList<Client>( dtoList.size() );
        for ( ClientDTO clientDTO : dtoList ) {
            list.add( toEntity( clientDTO ) );
        }

        return list;
    }

    @Override
    public List<ClientDTO> toDto(List<Client> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<ClientDTO> list = new ArrayList<ClientDTO>( entityList.size() );
        for ( Client client : entityList ) {
            list.add( toDto( client ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Client entity, ClientDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getIdClient() != null ) {
            entity.setIdClient( dto.getIdClient() );
        }
        if ( dto.getPrenomClient() != null ) {
            entity.setPrenomClient( dto.getPrenomClient() );
        }
        if ( dto.getNomClient() != null ) {
            entity.setNomClient( dto.getNomClient() );
        }
        if ( dto.getAdresseClient() != null ) {
            entity.setAdresseClient( dto.getAdresseClient() );
        }
        if ( dto.getEmail() != null ) {
            entity.setEmail( dto.getEmail() );
        }
        if ( dto.getTelCLient() != null ) {
            entity.setTelCLient( dto.getTelCLient() );
        }
    }
}
