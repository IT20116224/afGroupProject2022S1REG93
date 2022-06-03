const express = require("express");
const router = express.Router();

const panelmembers = require("../models/PanelMSchema");

// view all - home
router.get("/getpm", async(req,res) => {
    try {
        const userdata = await panelmembers.find();
        res.status(201).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
});

// profile
router.get("/profile/:id", async(req,res) => {
    try {
        
        console.log(req.params);
        const {id} = req.params;

        const singlePanelMember = await panelmembers.findById({_id:id});
        console.log(singlePanelMember);

        res.status(201).json(singlePanelMember);

    } catch (error) {
        res.status(422).json(error);
        
    }
});

// register
router.post("/registerpm", async(req, res) => {
    // console.log(req.body);

    const {firstName, lastName, email, nic, address, phone, edu} = req.body;

    // if(!firstName || !lastName || !email || !nic){
    //     res.status(422).json("Please fill the required data");
    // } 

    try{       
        const prevMember = await panelmembers.findOne({email:email});
        console.log(prevMember);

        if(prevMember){
            res.status(422).json("This user is already registered!");
        }
        else{
            const addPanelMember = new panelmembers({
                firstName, lastName, email, nic, address, phone, edu
            });

            await addPanelMember.save();
            res.status(201).json(addPanelMember);
            console.log(addPanelMember);
        }

    } catch(error){
        res.status(422).json(error);
    }
});

// edit
router.patch("/editpm/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const updatedPanelMember = await panelmembers.findByIdAndUpdate(id,req.body,{
            new: true
        });

        console.log(updatedPanelMember);

        res.status(201).json(updatedPanelMember);

    } catch (error) {
        res.status(422).json(error);
    }
});

// delete
router.delete("/deletepm/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deletePanelMember = await panelmembers.findByIdAndDelete({_id:id});
        console.log(deletePanelMember);
        res.status(201).json(deletePanelMember);


    } catch (error) {
        res.status(422).json(error);
    }
});

module.exports = router;