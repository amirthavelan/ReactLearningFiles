
import React, {useState} from 'react';


function Accordion({items}){
	
	const [expandedIndexes, setExpandedIndexes] = useState([]);
	
	const toggleItem = (index) => {
		setExpandedIndexes((prevIndexes) => {
			if(prevIndexes.includes(index)){
				return prevIndexes.filter((i) => i !== index);
			}
			else{
				return [...prevIndexes, index];
			}
		});
	}
	
	return (
	
	<div>
	{
		items.map((item, index) => (
			
			<div key={index}>
			<div className="title" 
				style={{
					border: "2px solid blue",
					padding: "10px",
					cursor: "pointer",
				}}
				onClick={()=> toggleItem(index)}
			>
			{item.title}
			</div>
			{expandedIndexes.includes(index) && (
				<div className="content"
					style={{
						padding: "10px",
						backgroundColor: "cyan",
						borderTop: "none",
					}}
				>
				{item.content}
				</div>
				
			)}
			</div>
		))
		
		
	}
	</div>
	
	);
	
}

export default Accordion;
