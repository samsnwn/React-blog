import React from 'react'
import { Card, Grid, Text, Divider, Button, Row } from "@nextui-org/react";

export default function Post(props) {
  return (
    <div >
       <Grid sm={12} md={5} >
        <Card css={{ mw: "830px", marginBottom: '20px' }}>
          <Card.Header>
            {props.edit ? <input type="text"/> : <Text b>Name: {props.name}; Title: {props.title}</Text>}
            
          </Card.Header>
          <Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              {props.content}
            </Text>
          </Card.Body>
          <Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light >
                Edit
              </Button>
              <Button size="sm" color='error' onClick={(e) => props.deleteHandler(props.index)}>Delete</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </div>
  )
}
