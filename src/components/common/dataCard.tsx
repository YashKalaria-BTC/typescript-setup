import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { messages } from '../../constants';

interface DataCardProps {
  data: { data_point: string; value: string }[];
  companyType: {
    data_point: string;
    value: string;
  };
}

const DataCard: React.FC<DataCardProps> = ({ data = [], companyType = {} }) => {
  return (
    <Col md={6} xl={4} className="details-info">
      <Card>
        <Card.Body
          className={`pad-3${
            data.length > 0 || (companyType && companyType.value)
              ? ''
              : ' no-data-card-msg'
          }`}>
          {data.length > 0 &&
            data.map((item) => {
              return (
                <div className="text-data">
                  <h4>
                    {item.data_point === 'uen'
                      ? item.data_point.toUpperCase() + ':'
                      : item.data_point + ':'}
                  </h4>
                  <p>{item.value}</p>
                </div>
              );
            })}
          {companyType.value && (
            <div className="text-data">
              <h4>{companyType.data_point + ':'}</h4>
              <p>{companyType.value}</p>
            </div>
          )}
          {data.length === 0 && !companyType.value && <p>{messages.noData}</p>}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DataCard;
