import React, { useState, useEffect, useCallback } from 'react'
import { DotButton, PrevButton, NextButton } from './EmblaCarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
const EmblaCarousel = ({ slides, className }: any) => {
	const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [scrollSnaps, setScrollSnaps] = useState([])

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

	const onSelect = useCallback(() => {
		if (!embla) return
		setSelectedIndex(embla.selectedScrollSnap())
		setPrevBtnEnabled(embla.canScrollPrev())
		setNextBtnEnabled(embla.canScrollNext())
	}, [embla, setSelectedIndex])

	useEffect(() => {
		if (!embla) return
		onSelect()

		embla.on('select', onSelect)
	}, [embla, setScrollSnaps, onSelect])
	return (
		<div className={`embla ${className ? className : ''}`}>
			<div className='embla__viewport is-draggable is-dragging' ref={viewportRef}>
				<div className='embla__container'>
					{slides.map((item: any, index: any) => (
						<div className='embla__slide' key={index}>
							<h3 className=' hover:text-[#e73759] text-xl'>{item.label}</h3>
						</div>
					))}
				</div>
			</div>
			<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
			<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
		</div>
	)
}

export default EmblaCarousel
