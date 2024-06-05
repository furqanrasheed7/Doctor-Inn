import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sideNavbar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 200,
    backgroundColor: '#fff',
    elevation: 8,
    paddingTop: 50,
  },
  navItemButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
