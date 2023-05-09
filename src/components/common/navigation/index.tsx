import styled from '@emotion/styled';
import { BackIcon } from '@deeplook/components/icons';

export interface NavProps {
  title: string;
}

export const Navigation = ({ title }: NavProps) => {
  return (
    <NavWrapper>
      <NavContent>
        <IconWrapper>
          <BackIcon />
        </IconWrapper>
        <Text>{title}</Text>
        <Spacing />
      </NavContent>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  height: 104px;

  display: flex;
  align-items: flex-end;

  position: fixed;

  background: ${({ theme }) => theme.palette.Black};
`;

const NavContent = styled.div`
  width: 100%;
  height: 56px;

  padding: 0 1rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.palette.White};
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div``;

const Spacing = styled.div`
  width: 40px;
  height: 40px;
`;
