import React from 'react';
import RequestListItem from './RequestListItem';
  

export default function RequestList ({
  id,
  delivery_address,
  complete_by,
  reimbursement_type,
  items, 
  currentUser

}) {
  
return(
    <ul> 
      <RequestListItem 
        id={id}
        delivery_address={delivery_address}
        complete_by={complete_by}
        reimbursement_type={reimbursement_type}
        items={items}
        currentUser={currentUser}
      />
    </ul>
  )
}