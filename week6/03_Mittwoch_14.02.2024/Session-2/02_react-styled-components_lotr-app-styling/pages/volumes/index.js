import Image from "next/image";
import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import {
  VolumeTitle,
  VolumeDescription,
} from "@/components/VolumeDetails/VolumeDetails";
import {
  VolumeAllTitle,
  VolumeAllUl,
  VolumeAllLi,
  StyledAllVolumesLink,
} from "@/components/VolumeOverview/VolumeOverview";

export default function Volumes() {
  return (
    <>
      <VolumeTitle>The Lord of the Rings</VolumeTitle>
      <VolumeDescription>{introduction}</VolumeDescription>
      <VolumeAllTitle>All Volumes</VolumeAllTitle>
      <VolumeAllUl>
        {volumes.map((volume) => (
          <VolumeAllLi key={volume.id}>
            <Image
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <StyledAllVolumesLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </StyledAllVolumesLink>
          </VolumeAllLi>
        ))}
      </VolumeAllUl>
    </>
  );
}
