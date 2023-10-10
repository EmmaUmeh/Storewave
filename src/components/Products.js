import { data } from "../utils/data";
import { Button } from "./Button";
import Card from "./Card";
const Products = () => {
    return(
        <>
            <div>
                
                       <div className="flex items-center sm:flex-col md:flex-col">

                            {
                                    data?.map((datas, index) => {
                                        return(
                                            <div key={index} className="flex flex-col p-10 justify-around items-center">
                                                <Card> 
                                                <div className="w-50">
                                                    <img 
                                                        src={datas.ImageUrl}
                                                        alt="ALt Image"
                                                        
                                                    />
                                                </div>
                                                <div className="text-2xl mt-5 mb-2 flex justify-around items-center">
                                                    {datas.name}
                                                </div>


                                                <div className="flex justify-center items-center">
                                                    <span>{datas.price}</span>
                                                    <strike className="ml-3">{datas.oldPrice}</strike>
                                                </div>
                                                    
                                                        <div className="flex justify-around items-center mt-5">
                                                            <Button/>
                                                        </div>
                                                </Card>

                                            </div>
                                        )
                                    })
                                }
                       </div>
              
            </div>
        </>
    )
}

export default Products;