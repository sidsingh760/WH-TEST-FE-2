import React from 'react'
import StyledBreadcrumb from '../../components/StyledBreadcrumb/StyledBreadcrumb';
import styled from 'styled-components'
import { data } from '../../constants/const'

export default function Home() {
    const styleDiv = (classNames: any) => {
        return (<div className={classNames['className']}>
            <h2>1. Simple case.</h2>
            <StyledBreadcrumb breadcrumData={data.case1Data} />
            <br />
            <h2>2 .Simple case with showArrow true</h2>
            <StyledBreadcrumb showArrow={true} breadcrumData={data.case1Data} />
            <br />
            <h2>{"3. For breadCrumbs.length > 1 – and arrow is also true then"}</h2>
            <StyledBreadcrumb showArrow={true} breadcrumData={data.case2Data} />
            <br />
            <h2>{"4. With paths.length > 2"}</h2>
            <StyledBreadcrumb showArrow={true} breadcrumData={data.case3Data} />
            <br />
            <StyledBreadcrumb showArrow={true} breadcrumData={data.case4Data} onBack={() => {
                console.log('onBack called')
            }} />
        </div>)
    }
    const MainDiv = styled(styleDiv)`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
`;
    return (
        <MainDiv />
    )
}
