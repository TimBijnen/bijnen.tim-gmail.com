export default function(){
  this.transition(
    this.fromRoute('job'),
    this.toRoute('jobs'),
    this.use('toDown'),
    this.reverse('toUp')
  );
}