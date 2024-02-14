import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import {
  StyledAllVolumesLink,
  VolumeTitle,
  VolumeDescription,
  VolumeFlexContainer,
  VolumeList,
  VolumeListLi,
  VolumeListLiSpan,
  VolumeListTitle,
  VolumeNextPreviousLinkNav,
  VolumeNextPreviousLink,
  VolumeNextPreviousLinkI,
  VolumeNextPreviousLinkII,
} from "@/components/VolumeDetails/VolumeDetails";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import ChevronLeft from "@/public/icons/chevron-left.svg";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <StyledAllVolumesLink href="/volumes" $variant={color}>
        <ChevronLeft /> All Volumes
      </StyledAllVolumesLink>
      <VolumeTitle>{title}</VolumeTitle>
      <VolumeDescription>{description}</VolumeDescription>
      <VolumeFlexContainer $variant={color}>
        <VolumeList>
          {books.map(({ ordinal, title }) => (
            <VolumeListLi key={title}>
              <VolumeListLiSpan>{ordinal}</VolumeListLiSpan> <br />{" "}
              <VolumeListTitle>{title}</VolumeListTitle>
            </VolumeListLi>
          ))}
        </VolumeList>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </VolumeFlexContainer>
      {previousVolume ? (
        <VolumeNextPreviousLinkNav>
          <VolumeNextPreviousLink
            $align="flex-start"
            $variant={color}
            href={`/volumes/${previousVolume.slug}`}
          >
            <span>
              <ArrowLeft />
            </span>
            <div>
              <VolumeNextPreviousLinkI>Previous Volume</VolumeNextPreviousLinkI>
              <br />
              <VolumeNextPreviousLinkII>
                {previousVolume.title}
              </VolumeNextPreviousLinkII>
            </div>
          </VolumeNextPreviousLink>
        </VolumeNextPreviousLinkNav>
      ) : null}
      {nextVolume ? (
        <VolumeNextPreviousLinkNav>
          <VolumeNextPreviousLink
            $align="flex-end"
            $variant={color}
            href={`/volumes/${nextVolume.slug}`}
          >
            <div>
              <VolumeNextPreviousLinkI>Next Volume</VolumeNextPreviousLinkI>
              <br />
              <VolumeNextPreviousLinkII>
                {nextVolume.title}
              </VolumeNextPreviousLinkII>
            </div>
            <span>
              <ArrowRight />
            </span>
          </VolumeNextPreviousLink>
        </VolumeNextPreviousLinkNav>
      ) : null}
    </>
  );
}
