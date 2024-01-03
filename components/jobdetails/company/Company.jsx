import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({companyLogo, jobTitle, companyName, Location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
           <Image 
             source={{uri: checkImageURL(companyLogo) ? companyLogo : 'https://tse1.mm.bing.net/th?id=OIP._pSn5r7jF5CteBI2JPmggwHaE8&pid=Api&P=0&h=180'}}
             style={styles.logoImage}
           />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
           <Text style={styles.companyName}>{companyName}</Text>
           <View>
            <Image 
              source={icons.location}
              resizeMode='contain'
              style={styles.locationImage}
            />
            <Text style={styles.locationName}>{Location}</Text>
           </View>
      </View>
    </View>
  )
}

export default Company