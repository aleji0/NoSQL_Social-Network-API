// require User and Thoughts models
const {Thoughts, Users} = require('../models');

// Thoughts controller
const thoughtController = {

    // get all thoughts
    getThoughts(req, res) {
        Thoughts.find({})
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // get thought by ID
    getThoughtById({ params }, res) {
        Thoughts.findOne({ _id: params.thoughtId })
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // create new thought
    addThought({ params, body }, res) {
        Thoughts.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'Invalid data' });
                    return;
                }
                
            })
            .catch(err => res.json(err));
    },
    
    // update thought
    updateThought({ params, body }, res) {
        Thoughts.findByIdAndUpdate({ _id: params.thoughtId }, body, { runValidators: true, new: true })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'There is no user with this ID' });
                    return;
                }
                
            })
            .catch(err => res.json(err));
    },
    // delete thought
    deleteThought({ params }, res) {
        Thoughts.findByIdAndDelete({ _id: params.thoughtId }, { runValidators: true, new: true })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'There is no user with this ID'});
                    return;
                }
                res.json(dbDumDum);
            })
            .catch(err => res.json(err));
    },

    // create reaction
    addReaction({params, body}, res){
        Thoughts.findOneAndUpdate(
            {_id: params.thoughtId},
            {$push: {reactions: body}},
            { new: true, runValidators: true }
        )
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'Invalid reaction data' });
                return;
            }
           
        })
        .catch(err => res.json(err));
    },

    // delete reaction
    deleteReaction({params}, res){
        Thoughts.findOneAndUpdate(
            {_id: params.thoughtId},
            {$pull: {reactions: {reactionId : params.reactionId}}},
            { new: true, runValidators: true }
        )
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'Invalid reaction data' });
                return;
            }
            
        })
        .catch(err => res.json(err));
    }
}
    
module.exports = thoughtController;