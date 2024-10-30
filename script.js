new Vue({
    el: '#app',
    data: {
        sitename: 'After School Classes',
        showProduct: true,
        selectedSort:'lowToHigh',//Default sort option
        conversionRate: 3.67, //the conversion rate for USD to AED

        lessons: [
            { id: 1, subject: 'Math', location: 'Juemirah', price: 50, spaces: 5, image: 'images/math.png' },
            { id: 2, subject: 'Science', location: 'Al Barsha', price: 45, spaces: 3, image: 'images/science.png' },
            { id: 3, subject: 'History', location: ' Jumeirah', price: 40, spaces: 2, image: 'images/history.png' },
            { id: 4, subject: 'English', location: 'Marina Towers', price: 35, spaces: 4, image: 'images/english.png' },
            { id: 5, subject: 'Art', location: 'Jumeirah', price: 55, spaces: 6, image: 'images/art.jpg' },
            { id: 6, subject: 'Music', location: 'Gems Academy', price: 60, spaces: 3, image: 'images/music.png' },
            { id: 7, subject: 'Physical Education', location: 'Repton', price: 30, spaces: 8, image: 'images/pe.png' },
            { id: 8, subject: 'Geography', location: 'Marina Towers', price: 40, spaces: 2, image: 'images/geography.png' },
            { id: 9, subject: 'Chemistry', location: 'Armada Tower 2', price: 50, spaces: 5, image: 'images/chemistry.png' },
            { id: 10, subject: 'Biology', location: 'Greens community center', price: 45, spaces: 4, image: 'images/biology.png' }
        ],
        cart: [], //Array to store all the lessons that are added to cart
        order: {
            name: '',
            phone: ''
        }
    },
       methods: {
        addToCart(lesson) {
            if (this.canAddToCart(lesson)) {//checks if lesson has avaiable spaces
                this.cart.push(lesson.id);//Add lessons to cart
                lesson.spaces--;//Decreases avaiable spaces
            }
        },
        canAddToCart(lesson) {
            return lesson.spaces > 0;//returns true if spaces are avaiable 
        },
        showCheckout() {
            this.showProduct = !this.showProduct;//Toggles between the list of products and the checkout view
        },
        submitOrder() {
            if (this.order.name && this.order.phone) {// to check of the name and the phone number are provided
                alert('Order submitted!');
                // Reset cart and form
                this.cart = [];//Resets the cart
                this.order.name = '';//Resets order from fields
                this.order.phone = '';
                this.showProduct = true;//Returns to the product list after submission
            }
        },
        sortLessons(){
            if(this.selectedSort==='highToLow'){
                this.lessons.sort((a, b)=>b.price-a.price);//Sort by price, H to L
            }
            else if(this.selectedSort==='lowToHigh'){
                this.lessons.sort((a, b)=> a.price- b.price);//Sort by price,L to H
            }
            else if(this.selectedSort==='availability'){
                this.lessons.sort((a,b)=>b.spaces-a.spaces);//Sorts by availablity in classes
            } 
        }
    },
    computed: {
        cartItemCount() {
            return this.cart.length;//Returns count of items in the cart
        },
        sortedLessons() {
            if(this.selectedSort==='availability'){
                return this.lessons.filter(lesson=>lesson.spaces>0);//TO filter lessons with availablity
            }
            return this.lessons;//It will return all the lessons if no filter is applied
        }
    }
});
