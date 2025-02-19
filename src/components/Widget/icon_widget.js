import React from 'react';

import { ReactComponent as Add } from "../../assets/svg/Add.svg";
import { ReactComponent as Search } from "../../assets/svg/search.svg";
import { ReactComponent as Delete } from "../../assets/svg/Delete.svg";
import { ReactComponent as Fullscreen } from "../../assets/svg/Fullscreen.svg";
import { ReactComponent as MoreVert } from "../../assets/svg/moreVert.svg";
import { ReactComponent as ArrowBack } from "../../assets/svg/ArrowBack.svg";
import { ReactComponent as PDF } from "../../assets/svg/Pdf.svg";
import { ReactComponent as Save } from "../../assets/svg/Save.svg";
import { ReactComponent as Download } from "../../assets/svg/Download.svg";
import { ReactComponent as Print } from "../../assets/svg/Print.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/ArrowDown.svg";
import { ReactComponent as FactCheck } from "../../assets/svg/FactCheck.svg";
import { ReactComponent as FilterList } from "../../assets/svg/FilterList.svg";
import { ReactComponent as SwapVert } from "../../assets/svg/SwapVert.svg";
import { ReactComponent as Check } from "../../assets/svg/check.svg";
import { ReactComponent as Isow } from "../../assets/svg/Isow.svg";
import { ReactComponent as ArrowUpSo } from "../../assets/svg/ArrowUpSo.svg";
import { ReactComponent as Dashboard } from "../../assets/svg/Dashboard.svg";
import { ReactComponent as Description } from "../../assets/svg/Description.svg";
import { ReactComponent as Chat } from "../../assets/svg/Chat.svg";
import { ReactComponent as Monitoring } from "../../assets/svg/Monitoring.svg";
import { ReactComponent as Settings } from "../../assets/svg/Settings.svg";
import { ReactComponent as Schedule } from "../../assets/svg/schedule.svg";
import { ReactComponent as ChevronRight } from "../../assets/svg/ChevronRight.svg";
import { ReactComponent as ChevronLeft } from "../../assets/svg/ChevronLeft.svg";
import { ReactComponent as Close } from "../../assets/svg/Close.svg";
import { ReactComponent as CalendarMonth } from "../../assets/svg/CalendarMonth.svg";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { ReactComponent as Sort } from "../../assets/svg/Sort.svg";

const IconWidget = (props) => {
    let html = '';

    switch (props.icon) {
        case "Add":
            html = <Add className={props.className} />
            break;
        case "Search":
            html = <Search className={props.className} />
            break;
        case "Fullscreen":
            html = <Fullscreen className={props.className} />;
            break;
        case "Delete":
            html = <Delete className={props.className} />
            break;
        case "ArrowBack":
            html = <ArrowBack className={props.className} />
            break;
        case "MoreVert":
            html = <MoreVert className={props.className} />
            break;
        case "PDF":
            html = <PDF className={props.className} />
            break;
        case "Save":
            html = <Save className={props.className} />
            break;
        case "Download":
            html = <Download className={props.className} />
            break;
        case "Print":
            html = <Print className={props.className} />
            break;
        case "FactCheck":
            html = <FactCheck className={props.className} />
            break;
        case "ArrowDown":
            html = <ArrowDown className={props.className} />
            break;
        case "FilterList":
            html = <FilterList className={props.className} />
            break;
        case "SwapVert":
            html = <SwapVert className={props.className} />
            break;
        case "Check":
            html = <Check className={props.className} />
            break;
        case "Isow":
            html = <Isow className={props.className} />
            break;
        case "ArrowUpSo":
            html = <ArrowUpSo className={props.className} />
            break;
        case "Dashboard":
            html = <Dashboard className={props.className} />
            break;
        case "Description":
            html = <Description className={props.className} />
            break;
        case "Chat":
            html = <Chat className={props.className} />
            break;
        case "Monitoring":
            html = <Monitoring className={props.className} />
            break;
        case "Settings":
            html = <Settings className={props.className} />
            break;
        case "Schedule":
            html = <Schedule className={props.className} />
            break;
        case "ChevronRight":
            html = <ChevronRight className={props.className} />
            break;
        case "ChevronLeft":
            html = <ChevronLeft className={props.className} />
            break;
        case "Close":
            html = <Close className={props.className} />
            break;
        case "CalendarMonth":
            html = <CalendarMonth className={props.className} />
            break;
        case "Menu":
            html = <Menu className={props.className} />
            break;
        case "Sort":
            html = <Sort className={props.className} />
            break;
    }

    return html;

};

export default IconWidget;