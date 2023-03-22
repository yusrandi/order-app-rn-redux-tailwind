import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { CategoriesApi } from '../api/CategoriesApi'

export default function Categories() {

    const [categories, setCategoris] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        CategoriesApi().then((result) => {
          console.log(`result ${result.data}`);
          setCategoris(result.data);

          console.log(`categories ${categories.length}`);
          
         
        }).catch(err =>{
          console.log(`error ${err}`);
        })
      }

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal:15, paddingTop:10 }} horizontal showsHorizontalScrollIndicator={false}>
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 2"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 4"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 5"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 6"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 7"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 8"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 9"/> */}
      {categories.map((category) => <CategoryCard key={category.id} imgUrl={category.imgUrl} title={category.title} />)}
    </ScrollView>
  )
}