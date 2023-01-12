import ProfileBox from '../../components/ProfileBox/ProfileBox.jsx';
import profile from '../../components/ProfileBox/profile.json';
import { Flex, Box } from '@chakra-ui/react';

export default function Profile() {
  return (
    <>
      <Box>
        <Flex
          direction="row"
          wrap="wrap"
          p="40"
          margin="10px"
          padding="10px"
          align={'center'}
          justify={'center'}
        >
          {profile.map((info, i) => {
            return (
              <div key={i}>
                {' '}
                <ProfileBox {...info} />{' '}
              </div>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}
