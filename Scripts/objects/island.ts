module objects {
    export class Island extends objects.GameObject {
        // private instance variables
        private _speed:number;
        private _level:number;

        // public properties

        // constructor
        constructor(level:number = 1) {
            super("island");
            this._level = level;
            this.Start();
        }

        // private methods
        private _move():void {
            switch(this._level) {
                case 1:
                this.y += this._speed;
                break;
                case 2:
                this.x -= this._speed;
                break;
                case 3:
                this.x += this._speed;
                break;
            }
            this._updatePosition();
        }

        private _checkBounds():void {
            switch(this._level) {
                case 1:
                if(this.y > 480 + this.Height) {
                    this.Reset();
                }
                break;
                case 2:
                if(this.x < 0 - this.Width) {
                    this.Reset();
                }
                break;
                case 3:
                if(this.x > 640 + this.Width) {
                    this.Reset();
                }
                break;
            }
        }

        // public methods

        public Reset(): void {
            this._speed = 5;
            switch(this._level) {
                case 1:
                this.y = -this.Height;
                this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
                break;
                case 2:
                this.x = 640 + this.Width;
                this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
                break;
                case 3:
                this.x = -this.Width;
                this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
                break;
            }
            this.IsColliding = false;
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
        }
    }
}