let Guest_List :string[] = ['Hammad Rind Balouch', 'Yasir Shaikh', 'Kifayat Ali Jafri'];
for(let i=0; i<Guest_List.length; i++){
    
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

let absent_Guest :string = 'Hammad Rind Balouch' ;
let new_Guest :string = 'Faraz Khan' ;
Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){
    
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)