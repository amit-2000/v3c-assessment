import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text } from '@chakra-ui/react';
import data from '../Data/data';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { BiSearchAlt2 } from 'react-icons/bi';
const ModuleTabs = () => {
  //get module_id and tab_id from url params...
  const { module, tab } = useParams();
  const ct = tab || 1; //made reuse for routing from search as well as straight.
  const [currentTab, setCurrentTab] = useState(ct - 1);
  const ModuleTabList = data[module - 1]; //tabs of module.
  return (
    <Box>
      <Box
        textAlign={'right'}
        mr={{ base: 2, lg: 8 }}
        mt={5}
        position={'relative'}
        zIndex={200}
        display="flex"
        justifyContent={'flex-end'}
      >
        <Box mr={4} cursor="pointer">
          <Link style={{ textDecoration: 'none' }} to="/search">
            <IconContext.Provider value={{ size: '2.2em', color: 'blue.700' }}>
              <BiSearchAlt2 />
            </IconContext.Provider>
          </Link>
        </Box>
        <Link style={{ textDecoration: 'none' }} to="/module" cursor="pointer">
          <IconContext.Provider value={{ size: '2.2em', color: 'gray' }}>
            <MdHome />
          </IconContext.Provider>
        </Link>
      </Box>
      <Text
        as={'h1'}
        fontWeight={400}
        color="blue.700"
        w={{ base: '100%', lg: '87%' }}
        m={'0 auto'}
        mb="5"
      >
        Module {parseInt(module)}
      </Text>
      <Box
        bg="#eee"
        display={'flex'}
        justifyContent="center"
        alignItems={'center'}
        flexDir="column"
        w={{ base: '100%', lg: '87%' }}
        m={'0 auto'}
      >
        <Box
          display={'flex'}
          justifyContent="space-around"
          w="100%"
          color="gray"
          borderBottom={'3px solid gray'}
        >
          {ModuleTabList.map((tab, tab_index) => {
            return (
              <Box
                p={{ base: 0, lg: 3 }}
                m={'0 2px 0 0'}
                mb="-.4px"
                mr={tab_index === 2 ? '0px' : '2px'}
                bg={currentTab === tab_index ? '#eee' : 'blue.700'}
                color={currentTab === tab_index ? 'blue.700' : '#fff'}
                onClick={() => setCurrentTab(tab_index)}
                w="100%"
                textAlign={'center'}
                cursor="pointer"
              >
                <Text as="h3">Tab {tab.tab}</Text>
              </Box>
            );
          })}
        </Box>
        <Box
          color="black"
          display={'flex'}
          flexDir={{ base: 'column', lg: 'row' }}
          mt={0}
          p={{ base: 2, lg: 7 }}
        >
          <Image
            src={ModuleTabList[currentTab].img}
            fit={'cover'}
            boxSize={{ base: '100%', lg: '50%' }}
          ></Image>
          <Box ml={4}>
            <Text as={'h3'} color="blue.700">
              {ModuleTabList[currentTab].title}
            </Text>
            <Text color="gray.500" lineHeight={{ base: '170%', lg: '200%' }}>
              {ModuleTabList[currentTab].discription}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModuleTabs;
