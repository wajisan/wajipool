//all Blockfrost API Calls
export const getStake = async (stakeAddress) => { 
    try {
        const response = await fetch(
            process.env.API + '/accounts/'+ stakeAddress +'/rewards', {
                method: 'GET',
                //mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    project_id : process.env.PROJECT_ID
                },
            }
        );
        if (response.status == 200) {
            let json = await response.json();
            let tmpAda = 0;
            if (json !== null && json.length > 0) {    
                json = json.reverse();
                json.forEach(element => {
                    element.rewardAda = element.amount / 1000000;
                    tmpAda += element.rewardAda;
                });
            }
            const obj = {
                data: json,
                totalAda: tmpAda,
                message: '',
            }
            return obj;
        }
        else if (response.status === 400){
            console.error(`Invalid stake address : ${stakeAddress}`);
            const obj = {
                data: [],
                totalAda: 0,
                message: `Invalid stake address : ${stakeAddress}`,
            }
            return obj;
        }
        else {
            console.error(`Error while reading blockchain`);
            const obj = {
                data: [],
                totalAda: 0,
                message: `Error while reading blockchain`,
            }
            return obj;
        }
        
    } catch (error) {
        console.error(error);
    }
};