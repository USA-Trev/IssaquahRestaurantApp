import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.detailsStyle}>{result.display_phone}</Text>
      <Text style={styles.detailsStyle}>{result.location.address1}</Text>
      {result.location.address2 ? <Text style={styles.detailsStyle}>{result.location.address2}</Text> : null}
      {result.location.address3 ? <Text style={styles.detailsStyle}>{result.location.address3}</Text> : null}
      <Text style={styles.detailsStyle}>{result.location.city}, {result.location.zip_code}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 5
  },
  imageStyle: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    marginBottom: 10
  },
  detailsStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 5
  },
})

export default ResultsShowScreen