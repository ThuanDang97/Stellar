import React, { memo } from 'react'
import { useTheme } from 'styled-components'
import { Line } from 'react-chartjs-2'
import { Chart, registerables, ScriptableContext } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

// Components
import Title from '@components/Title'
import {
  BoxShadowStyled,
  TextStyled,
  ViewStyled,
} from '@components/styled-components'
import LinkComponent from '@components/Link'

// Props type
import { LineChartProps } from '@self-types/components/LineChart.props'

// Constants
import {
  OPTIONS_CHART,
  OPTIONS_EMPTY_DATA_CHART,
  PRIMARY_HEADER_URL,
} from '@constants/index'

// Utils
import { getTheLastSixMonths } from '@utils/index'

Chart.register(...registerables)

const LineChart = ({ dataChart, isLocked }: LineChartProps) => {
  const theme = useTheme()
  const defaultMonths = getTheLastSixMonths()

  const labelsData =
    dataChart.length > 0 ? dataChart.map((data) => data.month) : defaultMonths // If no data, show symbolic month

  Chart.defaults.set('plugins.datalabels', {
    align: 'left',
    anchor: 'end',
    offset: `${theme.metrics.dimensions.sm}`,
    color: ['', '', '', '', '', `${theme.colors.firefly}`],
    font: {
      size: `${theme.typography.fontSize.sm}`,
      weight: `${theme.typography.fontWeight.bold}`,
    },
  })

  const dataProps = {
    type: 'line',
    datasets: [
      {
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const { ctx } = context.chart
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0, `${theme.colors.caribbeanGreenOpacity}`)
          gradient.addColorStop(1, `${theme.colors.silverLightOpacity}`)
          return gradient
        },
        data: dataChart.map((data) => data.score),
        pointBackgroundColor: `${theme.colors.white}`,
        pointRadius: [0, 0, 0, 0, 0, 5],
        pointHoverRadius: [0, 0, 0, 0, 0, 5],
        pointBorderWidth: 3,
        pointHoverBorderWidth: 3,
        borderColor: `${theme.colors.shamrock}`,
        borderWidth: 1,
        tension: 0.6,
        fill: true,
      },
    ],
    labels: labelsData,
  }

  return (
    <>
      <BoxShadowStyled
        shadowType="normal"
        bgColor={theme.colors.white}
        position="relative"
        padding={theme.metrics.dimensions.md}
        display="flex"
        flexDirection="column"
        alignItems="start"
        width={theme.metrics.width.full}
        maxHeight={380}
        gap={theme.metrics.dimensions.md}
        borderRadius={theme.metrics.borderRadius.default}
      >
        <Title
          title="Score Projection"
          color={theme.colors.black}
          fontSize={theme.typography.fontSize.common}
          lineHeight={theme.typography.lineHeight.tiny}
          mTop={theme.metrics.dimensions.tiny}
          mBottom={theme.metrics.dimensions.tiny}
        />
        <ViewStyled width={theme.metrics.width.full} height={250}>
          <Line
            plugins={[ChartDataLabels]}
            data={dataProps}
            options={
              dataChart.length > 0 ? OPTIONS_CHART : OPTIONS_EMPTY_DATA_CHART
            }
          />
          {dataChart.length === 0 && !isLocked && (
            <ViewStyled
              position="absolute"
              width={120}
              textAlign="center"
              top={166}
              left={120}
            >
              <TextStyled
                fontSize={theme.typography.fontSize.xss}
                letterSpacing={theme.typography.letterSpacing.md}
                color={theme.colors.black}
                lineHeight={theme.typography.lineHeight.tiny}
              >
                Add Bills To Project Your Future Score
              </TextStyled>
            </ViewStyled>
          )}
        </ViewStyled>
      </BoxShadowStyled>
      <ViewStyled
        display="flex"
        maxWidth={200}
        justifyContent="space-between"
        pTop={theme.metrics.dimensions.sm}
        pBottom={theme.metrics.dimensions.sm}
      >
        <LinkComponent
          href={PRIMARY_HEADER_URL.PRIVACY_POLICY.URL}
          text="Privacy Policy"
          fontSize={theme.typography.fontSize.xss}
          color={theme.colors.spanishGray}
          letterSpacing={theme.typography.letterSpacing.xxl}
          padding={theme.metrics.dimensions.xs}
          bgColorHover={theme.colors.iron}
        />
        <TextStyled color={theme.colors.spanishGray}> - </TextStyled>
        <LinkComponent
          href={PRIMARY_HEADER_URL.TERMS_OF_USE.URL}
          text="Terms of Use"
          fontSize={theme.typography.fontSize.xss}
          color={theme.colors.spanishGray}
          letterSpacing={theme.typography.letterSpacing.xxl}
          padding={theme.metrics.dimensions.xs}
          bgColorHover={theme.colors.iron}
        />
      </ViewStyled>
    </>
  )
}

export default memo(LineChart)
