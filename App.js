import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SectionList, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const datasource = [
  {data:[
      {key: 'Hainanese Chicken Rice', description: 'Poached chicken with fragrant rice cooked in chicken stock.', picture: require('./img/chicken_rice.jpg')},
      {key: 'Nasi Lemak', description: 'Coconut rice with sambal, fried chicken, egg and ikan bilis.', picture: require('./img/nasi_lemak.jpg')},
    ],
    title: "Rice Dishes", icon: "bowl-rice", bgcolor: "#F4A261"},
  {data:[
      {key: 'Laksa', description: 'Spicy coconut curry noodle soup with prawns and fishcake.', picture: require('./img/laksa.jpg')},
      {key: 'Char Kway Teow', description: 'Flat rice noodles stir-fried with dark soy sauce and cockles.', picture: require('./img/char_kway_teow.jpg')},
    ],
    title: "Noodles", icon: "bowl-food", bgcolor: "#E76F51"},
  {data:[
      {key: 'Ice Kacang', description: 'Shaved ice with red beans, jelly, corn and colourful syrups.', picture: require('./img/ice_kacang.jpg')},
      {key: 'Kaya Toast', description: 'Toast with coconut jam and butter, a classic breakfast.', picture: require('./img/kaya_toast.jpg')},
    ],
    title: "Desserts and Snacks", icon: "ice-cream", bgcolor: "#E5989B"},
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.itemCard}>
        <Image source={item.picture} style={styles.itemImage}/>
        <View style={styles.itemTextBox}>
          <Text style={styles.itemName}>{item.key}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <FontAwesome6 name="utensils" size={24} color="white"/>
        <Text style={styles.titleText}>Singapore Hawker Food</Text>
      </View>
      <SectionList contentContainerStyle={{padding: 10}} sections={datasource} renderItem={renderItem}
                   renderSectionHeader={({section:{title, icon, bgcolor}})=>(
                       <View style={[styles.headerBox, {backgroundColor: bgcolor}]}>
                         <FontAwesome6 name={icon} size={20} color="white"/>
                         <Text style={styles.headerText}>{title}</Text>
                       </View>
                   )}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    paddingTop: 40,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#264653',
    paddingVertical: 12,
  },
  titleText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 12,
    marginBottom: 6,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 8,
    marginBottom: 8,
  },
  itemImage: {
    width: 110,
    height: 85,
    borderRadius: 6,
  },
  itemTextBox: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#264653',
  },
  itemDescription: {
    fontSize: 13,
    color: '#555555',
    marginTop: 4,
  },
});
