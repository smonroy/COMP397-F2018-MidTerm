module objects {
    export class Player extends objects.GameObject {
        // private instance variables
        private _level;
        
        // public properties
        
        // constructors
        constructor(level:number = 1) {
            super("plane");
            this._level = level;
            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            switch(this._level) {
                case 1:
                this.y = 435;
                break;
                case 2:
                this.x = 45;
                this.rotation = 90;
                break;
                case 3:
                this.x = 595;
                this.rotation = -90;
                break;
            }
        }

        public Update():void {
            if(this._level == 1) {
                this.x = managers.Game.stage.mouseX;
            } else {
                this.y = managers.Game.stage.mouseY;
            }
            this._updatePosition();

            // checks the right boundary
            if(this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }

            // check the left boundary
            if(this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }

            // check the bottom boundary
            if(this.y > 480 - this.HalfHeight) {
                this.y = 480 - this.HalfHeight;
            }

            // check the top boundary
            if(this.y < this.HalfHeight) {
                this.y = this.HalfHeight;
            }
            
        }

        public Reset():void {

        }

        public Destroy():void {
            
        }
    }
}