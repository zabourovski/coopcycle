import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './association.reducer';

export const AssociationDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const associationEntity = useAppSelector(state => state.association.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="associationDetailsHeading">
          <Translate contentKey="glimApp.association.detail.title">Association</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{associationEntity.id}</dd>
          <dt>
            <span id="idAsso">
              <Translate contentKey="glimApp.association.idAsso">Id Asso</Translate>
            </span>
          </dt>
          <dd>{associationEntity.idAsso}</dd>
          <dt>
            <span id="nomAsso">
              <Translate contentKey="glimApp.association.nomAsso">Nom Asso</Translate>
            </span>
          </dt>
          <dd>{associationEntity.nomAsso}</dd>
        </dl>
        <Button tag={Link} to="/association" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/association/${associationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default AssociationDetail;
