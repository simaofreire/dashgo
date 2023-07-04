'use client';

import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';

// import ReactApexChart from 'react-apexcharts';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { options, series } from './chartConfig';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Dashboard() {
	return (
		<Flex direction="column">
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
					<Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
						<Text fontSize="lg" mb="4">
							Inscritos da semana
						</Text>

						<ReactApexChart type="area" height={160} width="100%" options={options} series={series} />
					</Box>
					<Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
						<Text fontSize="lg" mb="4">
							Taxa de abertura
						</Text>

						<ReactApexChart type="area" height={160} width="100%" options={options} series={series} />
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
}
