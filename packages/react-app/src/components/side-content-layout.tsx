import { useViewport } from '@1hive/1hive-ui';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../styles/breakpoints';

const WrapperStyled = styled.div`
  display: grid;
  grid-template-areas: ${(props: any) =>
    props.isOneCol ? "'s s s'\n'm m m'\n'f f f'" : "'m m s'\n'm m s'\n'f f f'"};
  height: calc(100vh - 64px);
  overflow-y: auto;
  grid-template-columns: 1fr auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const SideBlockStyled = styled.div`
  grid-area: s;
`;

const FooterStyled = styled.div`
  grid-area: f;
  transition: all 5s linear;
`;

const ScrollViewStyled = styled.div`
  ${(props: any) =>
    props.scrollable
      ? `
      overflow-x: auto;
      ::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
      height: calc(100vh - 64px);
      `
      : ''}

  grid-area: m;
`;

type Props = {
  main: React.ReactNode;
  side?: React.ReactNode;
  footer: React.ReactNode;
};

function SideContentLayout({ main, side, footer }: Props) {
  const { width: vw } = useViewport();
  const wrapperElement = document.getElementById('main-scroll');
  const scrollRef = useRef<HTMLDivElement>();
  const footerRef = useRef<HTMLDivElement>();
  const [isOneCol, setIsOneCol] = useState(false);

  useEffect(() => {
    const handleWheelOnMain = (e: WheelEvent) => {
      const scrollElement = scrollRef.current as HTMLElement;
      if (scrollElement && wrapperElement) {
        if (
          Math.round(scrollElement.scrollHeight - scrollElement.scrollTop) >=
            Math.round(scrollElement.clientHeight) &&
          e.deltaY < 0
        ) {
          requestAnimationFrame(() =>
            wrapperElement.scroll({
              top: -footerRef.current!.clientHeight,
              left: 0,
              behavior: 'auto',
            }),
          );
        }
        if (
          Math.round(scrollElement.scrollHeight - scrollElement.scrollTop) ===
            Math.round(scrollElement.clientHeight) &&
          wrapperElement.scrollTop - scrollElement.scrollTop <= 0 &&
          e.deltaY > 0
        ) {
          requestAnimationFrame(() =>
            wrapperElement.scroll({
              top: footerRef.current!.clientHeight,
              left: 0,
              behavior: 'auto',
            }),
          );
        }
      }
    };
    if (scrollRef.current && footerRef.current && !isOneCol) {
      scrollRef.current?.addEventListener('wheel', handleWheelOnMain);
    } else {
      scrollRef.current?.removeEventListener('wheel', handleWheelOnMain);
    }
    return () => scrollRef.current?.removeEventListener('wheel', handleWheelOnMain);
  }, [scrollRef.current, footerRef.current, isOneCol]);

  useEffect(() => {
    setIsOneCol(!side || vw < BREAKPOINTS.large);
  }, [vw, side]);

  return (
    <>
      <WrapperStyled isOneCol={isOneCol} id="main-scroll">
        <ScrollViewStyled scrollable={!isOneCol} id="scroll-view" ref={scrollRef}>
          {main}
        </ScrollViewStyled>
        {side && <SideBlockStyled>{side}</SideBlockStyled>}
        <FooterStyled ref={footerRef}>{footer}</FooterStyled>
      </WrapperStyled>
    </>
  );
}

export default SideContentLayout;
