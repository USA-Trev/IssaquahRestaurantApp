import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchAPI, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter(results => {
      return results.price === price
    })
  }

  return(
    <>
      <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
        results={filterResultsByPrice('$')}
        title="Cheapest Price"
        />
        <ResultsList
        results={filterResultsByPrice('$$')}
        title="Average Price"
        />
        <ResultsList
        results={filterResultsByPrice('$$$')}
        title="High Price"
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen