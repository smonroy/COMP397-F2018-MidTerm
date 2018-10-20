module objects {
    export class Ocean extends objects.GameObject {
        // private instance variables
        private speed:number;
        private _level:number;

        // public properties

        // constructor
        constructor(level:number = 1) {
            super("ocean");
            this._level = level;
            switch(this._level) {
                case 2:
                case 3:
                this.rotation = -90;
                break;
            }
            this.Start();
        }

        // private methods
        private _checkBounds():void {
            switch(this._level) {
                case 1:
                if(this.y >=0) {
                    this.Reset();
                }
                break;
                case 2:
                if(this.x <= -800) {
                    this.Reset();
                }
                break;
                case 3:
                if(this.x >=0) {
                    this.Reset();
                }
                break;
            }
            
        }

        private _move():void {
            switch(this._level) {
                case 1:
                this.y += this.speed;
                break;
                case 2:
                this.x -= this.speed;
                break;
                case 3:
                this.x += this.speed;
                break;
            }
        }

        // public methods

        public Reset(): void {
            switch(this._level) {
                case 1:
                this.y = -960;
                break;
                case 2:
                this.x = 0;
                this.y = 480;
                break;
                case 3:
                this.x = -800;
                this.y = 480;
                break;
            }
        }        
        
        public Start(): void {
            this.Reset();
            this.speed = 5; // 5 px per frame
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}