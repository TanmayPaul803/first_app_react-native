import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const toggleTheme = () => {
    setisDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            {/* Profile */}
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15}}>
                <Title> Tanmay Paul</Title>
                <Caption style={{marginLeft: 8}}>@tanmaypaul</Caption>
              </View>
            </View>
            {/* User Following , Followers */}
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  80{' '}
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>

              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  100{' '}
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            {/* Home-Section */}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {}}
            />
            {/* Profile-Section */}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {}}
            />
            {/* Bookmarks-Section */}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {}}
            />
            {/* Settings-Section */}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cog-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {}}
            />
            {/* Support-Section */}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {}}
            />
          </Drawer.Section>

          {/* Dark-theme switch */}
          <Drawer.Section title="preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
