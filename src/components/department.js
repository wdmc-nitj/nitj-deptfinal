import React from 'react'
import Departmentupper from './Departmentupper';
import Departmentmiddle from './Departmentmiddle';
import Departmentlower from './Departmentlower';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


export const Department = () => {

  const dept=useParams()?.dept;
  
  const {data}=useFetch(`/dept/${dept}/messageofHOD`);
    const department =useFetch(`/dept/${dept}/description`)?.data;
  return (
    <div>
      {console.log(data)}
      {console.log(department)}
    <Departmentupper name={dept.toUpperCase()} introduction={department?.description}
 departmentimage={department?.img}/>
    <Departmentlower name={data?.name} img= {data?.img} message={data?.message}/>
    <Departmentmiddle/>
    </div>
  )
}


