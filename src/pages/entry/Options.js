import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ScoopOption from './ScoopOptions';
import ToppingOption from './ToppingOptions';
import AlertBanner from '../common/AlertBanner';

export default function Options({optionType}) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    //optionType is 'scoops' or 'toppings'
    useEffect(() => {
        fetch(`http://localhost:3030/${optionType}`)
        .then(res => res.json())
        .then(data => setItems(data))
        .catch((err) => {
            setError(true)
        })
    }, [optionType])

    if (error) {
        return <AlertBanner />;
    }

    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

    const optionItems = items.map((item) => (
        <ItemComponent
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        />
      ));

    {items.map((item) => 
        <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
        <img
        style={{ width: '75%' }}
        key={item.name}
        src={`http://localhost:3030/${item.imagePath}`}
        alt={`${item.name} scoop`}
        data-testid='hello'
        />
        </Col>
        )}

    return (
        <Row>
             {optionItems}
        </Row>
    )
}