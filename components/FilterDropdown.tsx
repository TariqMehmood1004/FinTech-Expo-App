// import DataManager related classes
import { Query } from '@syncfusion/ej2-data';
import { DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

export default class FilterDropdownlist extends React.Component<{}, {}> {

    // maps the appropriate column to fields property
    private fields: object = { text: "Country", value: "Index" };
    // define the filtering data
    private searchData: { [key: string]: Object }[] = [
        { Index: "s1", Country: "Alaska" }, { Index: "s2", Country: "California" },
        { Index: "s3", Country: "Florida" }, { Index: "s4", Country: "Georgia" }
    ];

    // filtering event handler to filter a Country
    public onFiltering(args: FilteringEventArgs) {
        let query = new Query();
        // frame the query based on search string with filter type.
        query = (args.text !== "") ? query.where("Country", "startswith", args.text, true) : query;
        // pass the filter data source, filter query to updateData method.
        args.updateData(this.searchData, query);
    }

    public render() {
        return (
            // specifies the tag for render the DropDownList component
            <DropDownListComponent id="ddlelement" popupHeight="250px" fields={this.fields} filtering={this.onFiltering = this.onFiltering.bind(this)} allowFiltering={true} dataSource={this.searchData} placeholder="Select a country" />
        );
    }
}
