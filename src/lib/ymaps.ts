/* eslint-disable antfu/no-top-level-await */
import React from 'react'
import ReactDom from 'react-dom'

const [ymaps3React] = await Promise.all([ymaps3.import('@yandex/ymaps3-reactify'), ymaps3.ready])

export const reactify = ymaps3React.reactify.bindTo(React, ReactDom)
export const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker }
    = reactify.module(ymaps3)

const defaultUiTheme = await import('@yandex/ymaps3-default-ui-theme')
export const { YMapDefaultMarker } = reactify.module(defaultUiTheme)
