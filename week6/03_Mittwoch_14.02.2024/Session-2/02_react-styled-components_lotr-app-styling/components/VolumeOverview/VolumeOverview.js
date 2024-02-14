import styled, { css } from "styled-components";
import Link from "next/link";

export const VolumeAllTitle = styled.h1`
  font-size: 2rem;
  padding: 0 45px;
`;

export const VolumeAllUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  list-style-type: none;
  padding: 0 45px;
`;

export const VolumeAllLi = styled.li`
  flex: 1;
  text-align: center;
`;

export const StyledAllVolumesLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: var(--secondary-color);
  &:hover {
    text-decoration: underline;
  }
`;
