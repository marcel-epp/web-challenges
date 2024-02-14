import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledAllVolumesLink = styled(Link)`
  display: flex;
  align-items: center;
  ${({ $variant }) =>
    $variant &&
    css`
      color: ${$variant};
    `}
  text-decoration: none;
  padding: 0 45px;
  &:hover {
    ${({ $variant }) =>
      $variant &&
      css`
        text-decoration: underline;
      `}
  }
`;

export const VolumeTitle = styled.h1`
  font-size: 3rem;
  padding: 0 45px;
`;

export const VolumeDescription = styled.p`
  padding: 0 45px;
  margin: 32px 0;
`;

export const VolumeFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  color: var(--primary-color);
  ${({ $variant }) =>
    $variant &&
    css`
      background-color: ${$variant};
    `}
`;

export const VolumeList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`;

export const VolumeListLi = styled.li`
  margin: 25px 0;
`;

export const VolumeListLiSpan = styled.span`
  font-size: 12px;
  font-style: italic;
  display: block;
`;

export const VolumeListTitle = styled.span`
  display: block;
  margin-top: -15px;
`;

export const VolumeNextPreviousLink = styled(Link)`
  display: flex;
  align-items: end;
  gap: 15px;
  padding: 15px 45px;
  ${({ $align }) =>
    $align &&
    css`
      align-self: ${$align};
    `}
  ${({ $variant }) =>
    $variant &&
    css`
      color: ${$variant};
    `}
  text-decoration: none;
  &:hover {
    ${({ $variant }) =>
      $variant &&
      css`
        text-decoration: underline;
      `}
  }
`;

export const VolumeNextPreviousLinkNav = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VolumeNextPreviousLinkI = styled.span`
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
`;

export const VolumeNextPreviousLinkII = styled.span`
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
`;
