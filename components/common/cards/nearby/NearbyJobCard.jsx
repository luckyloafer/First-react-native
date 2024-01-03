
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils/index'

const NearbyJobCard = ({job, handleNavigate})  => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
         <TouchableOpacity style={styles.logoContainer}>
           <Image 

            source={{uri:checkImageURL(job.employer_logo) ? job.employer_logo :'https://tse4.mm.bing.net/th?id=OIP.5QIi7UNlYFqhV1jkR-b-4AAAAA&pid=Api&P=0&h=180' }}
            resizeMode='contain'
            style={styles.logoImage}
           />
         </TouchableOpacity>

         
         <View style={styles.textContainer}>
              <Text style={styles.jobName} numberOfLines={1}>
                {job.job_title}
              </Text>
              <Text style={styles.jobType}>{job.job_employment_type}</Text>
         </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard