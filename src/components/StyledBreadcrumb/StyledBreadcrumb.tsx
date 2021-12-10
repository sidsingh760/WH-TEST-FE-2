import React, { FC, useEffect, useState } from 'react'
import { Breadcrumb } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import styled from 'styled-components'
interface BreadcrumbItems {
    id?: number
    path: string
    breadcrumbName: string
    coustomStyle?: React.CSSProperties

}
interface BreadcrumpsDetailItems {
    defaultSeprator: BreadcrumbItems[]
    arrowSeprator: BreadcrumbItems[]
}
interface BreadcrumbProps {
    breadcrumData: BreadcrumbItems[]
    showArrow?: boolean
    onBack?: ()=> void
}
const StyledBreadcrumb: FC<BreadcrumbProps> = ({
    breadcrumData,
    showArrow = false,
    onBack,
}) => {
    const [breadCrumpDetails, setBreadCrumpDetails] = useState<BreadcrumpsDetailItems>({
        defaultSeprator: [],
        arrowSeprator: []
    })
    const [showArrowIcon, setShowArrowIcon] =useState<boolean>(false)
    useEffect(() => {
        let arrowSepratorData: BreadcrumbItems[] = []
        let defaultSepratorData: BreadcrumbItems[] = []
        if (showArrow || breadcrumData.length > 2){
            setShowArrowIcon(true)
        } 
        
            breadcrumData.forEach((d, i) => {
                if((i === breadcrumData.length - 1 && breadcrumData.length > 1) || (breadcrumData.length === 1)){
                    return arrowSepratorData.push(d);
                }
                defaultSepratorData.push(d)
            })
          
            setBreadCrumpDetails({ arrowSeprator: arrowSepratorData, defaultSeprator: defaultSepratorData })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [breadcrumData,showArrow,onBack])
    const arrowBreadCrumpsStyle = (classNames: any) => {
        return (<div className={classNames['className']}>
            <div className="div" > {showArrowIcon && <ArrowLeftOutlined onClick={onBack} />} <Breadcrumb routes={breadCrumpDetails.arrowSeprator} /></div>
        </div>)
    }
    const ArrowBreadcrump = styled(arrowBreadCrumpsStyle)`
        .div {
            display: flex;
            justify-content: center;
            font-weight: bold;

        }
        .div > span{
            padding: 4px;
        }

    `;
  return (
        <>
            {breadCrumpDetails.defaultSeprator.length > 0 && <Breadcrumb routes={breadCrumpDetails.defaultSeprator} />}
            {breadCrumpDetails.arrowSeprator.length > 0 &&
                <ArrowBreadcrump />}
        </>
    );
}
export default StyledBreadcrumb
