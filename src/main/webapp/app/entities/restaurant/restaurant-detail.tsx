import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './restaurant.reducer';

export const RestaurantDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const restaurantEntity = useAppSelector(state => state.restaurant.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="restaurantDetailsHeading">
          <Translate contentKey="glimApp.restaurant.detail.title">Restaurant</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{restaurantEntity.id}</dd>
          <dt>
            <span id="idRest">
              <Translate contentKey="glimApp.restaurant.idRest">Id Rest</Translate>
            </span>
          </dt>
          <dd>{restaurantEntity.idRest}</dd>
          <dt>
            <span id="nomRest">
              <Translate contentKey="glimApp.restaurant.nomRest">Nom Rest</Translate>
            </span>
          </dt>
          <dd>{restaurantEntity.nomRest}</dd>
          <dt>
            <span id="adresseRest">
              <Translate contentKey="glimApp.restaurant.adresseRest">Adresse Rest</Translate>
            </span>
          </dt>
          <dd>{restaurantEntity.adresseRest}</dd>
        </dl>
        <Button tag={Link} to="/restaurant" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/restaurant/${restaurantEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default RestaurantDetail;
