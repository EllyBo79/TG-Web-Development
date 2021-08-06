import React from 'react'
import TempMain from './TempMain'
// import { useState } from 'react';
 
      
    export default function Mother({data}) {
        
   console.log(data)
        
        return (
            <div>
              <TempMain data={data}/>
            </div>
        )
      };

