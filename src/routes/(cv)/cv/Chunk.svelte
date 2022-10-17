<script lang="ts">

    export let start: number;
    export let stop: number | null = null;
    export let wrap: boolean;
    export let clear: boolean = false;
    export let header: string;
    export let two: string | undefined = undefined;
    export let three: string | undefined = undefined;
    export let four: string | string[] | undefined = undefined;
    export let five: string | undefined = undefined;
    export let six: string | undefined = undefined;

	// 					start={typeof start === "function" ? start.call(null, entry) : entry[start]} 
	// 					stop={typeof stop === "function" ? stop.call(null, entry) : stop === null ? null : entry[stop]} 
	// 					header={typeof header === "function" ? header.call(null, entry) : entry[header]} 
	// 					two={typeof two === "function" ? two.call(null, entry) : entry[two]} 
	// 					three={typeof three === "function" ? three.call(null, entry): entry[three]} 
	// 					four={typeof four === "function" ? four.call(null, entry): entry[four]} 
	// 					five={typeof five === "function" ? five.call(null, entry): entry[five]} 
	// 					six={typeof six === "function" ? six.call(null, entry): entry[six]}


    // convertArrayToNote(data) {
		
	// 	if(data && Array.isArray(data))
	// 			return <ul>
	// 				{
	// 					data.map(
	// 						(entry, index) => 
	// 							<li key={index} className="note">
	// 								{entry}
	// 							</li>
	// 					)
	// 				}
	// 			</ul>;
	// 	else
	// 		return data;
		
	// }

    let end = stop === null ? "present" : start !== stop ? stop : "";
		// var three = this.convertArrayToNote(this.props.three);
		// var four = this.convertArrayToNote(this.props.four);
		// var five = this.convertArrayToNote(this.props.five);
		// var six = this.convertArrayToNote(this.props.six);

</script>

	
<div class={"chunk " + (wrap ? "col-sm-6 col-md-6" : "col-sm-12 col-md-12")} style={clear ? "clear: both" : ""}>
    <div class={"row"}>
        <div class="col-md-2 date">
            {start + (end ? "-" : "")}{end}
        </div>
        <div class="col-md-10">
            <strong class="chunk-header">{header}</strong>
            {#if two}<span><br/>{two} </span>{/if}
            {#if three}<div><small>{three}</small></div>{/if}
            {#if four}
				{#if Array.isArray(four)}
					<small>
						{#each four as item}
							- {item}<br/>
						{/each}
					</small>
				{:else}
					<div><small>{four}</small></div>
				{/if}
			{/if}
            {#if five}<div><small>{five}</small></div>{/if}
            {#if six}<div><small>{six}</small></div>{/if}
        </div>
    </div>
</div>