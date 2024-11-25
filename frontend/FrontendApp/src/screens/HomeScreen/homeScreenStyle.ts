import { StyleSheet } from 'react-native';
// import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    backgroundColor: '#A3C8E2',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10,
    borderRadius: 8,
  },
  searchButton: {
    backgroundColor: '#ff4757',
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  redButton: {
    backgroundColor: '#ff4757',
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cardsContainer: {
    marginTop: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 10,
    shadowColor: 'rgba(1, 168, 230, 207)', //watafak opravi go
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 26,
  },
  iconContainer: {
    backgroundColor: '#4A90E2',
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    marginLeft: 20,
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
  },
  logo:{
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
